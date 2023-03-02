var BoomerangEmailMeterWorkerObject = (function() {
    var MAX_TEXT_LENGTH = 250000;

    /**
     * @license: word_count licensed under Apache License.
     * word_count function Ported from https://github.com/ipeirotis/ReadabilityMetrics based on StackOverflow recommendations
     */

    var word_count = function(text) {
        var cleanText = clean_line(text);
        var words = cleanText.split(" ");
        var wordCount = 0;
        for (var i = 0; i < words.length; i++)
        {
            if (words[i].length > 0)
            {
                wordCount++;
            }
        }
        return wordCount;
    }
    var clean_line = function(line) {
        var cleanedLine = ""
        for (var i = 0; i < line.length; i++) {
            var c = line[i];
            // Check if character is a letter or apostrophe. Clever way to do it, but works in places regex/ascii ordinal doesn't.
            if(c.toLowerCase() != c.toUpperCase() || c == "'")
            {
                cleanedLine += c;
            } 
            else 
            {
                cleanedLine += " ";
            }
        }
        return cleanedLine;
    }
    var sentence_count = function(text) {
    // TODO: is this good enough?
    // based on http://stackoverflow.com/questions/35215348/count-sentences-in-string-with-javascript
    // made it work with parens, quotes, and multiple punctuation marks
        var SENTENCE_REGEX = /\w[.?!]+([\s\)\"\']|$)/g;
        var matches = text.match(SENTENCE_REGEX);
        if (matches) {
            return matches.length;
        }
        else {
            return 0;
        }
    }
    var syllable_count = function(word) {
        var SubSyl = [/cial/, /tia/, /cius/, /cious/, /giu/, /ion/, /iou/, /sia$/, /.ely$/];

        var AddSyl = [/ia/, /riet/, /dien/, /iu/, /io/, /ii/, /[aeiouym]bl$/, /[aeiou]{3}/, /^mc/, /ism$/,
                /[^aeiouy][^aeiouy]l$/, /[^l]lien/, /^coa[dglx]./, /[^gq]ua[^auieo]/, /dnt$/];

        word = word.toLowerCase();
        word = word.replace(/'/g, " ");

        if (word === "i")
            return 1;
        if (word === "a")
            return 1;

        if (word[word.length - 1] === "e") {
            word = word.substring(0, word.length - 1);
        }

        var phonems = word.split(/[^aeiouy]+/);

        var syl = 0;
        for (var i = 0; i < SubSyl.length; i++) {
            var syllabe = SubSyl[i];
            if (syllabe.test(word)) {
                syl--;
            }
        }
        for (var i = 0; i < AddSyl.length; i++) {
            var syllabe = AddSyl[i];
            if (syllabe.test(word)) {
                syl++;
            }
        }
        if (word.length == 1) {
            syl++;
        }

        for (var i = 0; i < phonems.length; i++) {
            if (phonems[i].length > 0)
                syl++;
        }

        if (syl == 0) {
            syl = 1;
        }

        return syl;
    }
    var flesch_kincaid_grade_level = function(wordCount, sentenceCount, syllableCount) {
        var grade = 0.39 * wordCount / sentenceCount + 11.8 * syllableCount / wordCount - 15.59;
        if (grade == Infinity) {
            return "Not available"
        }
        else {
            return grade;
        }
    }
    var question_count = function(text) {
        var QUESTION_REGEX = /[^.!?]+[.!?]*\?/g;
        var matches = text.match(QUESTION_REGEX);
        if (matches) {
            return matches.length;
        }
        else {
            return 0;
        }
    }

    function remove_quoted_text(messageBodyPlainText) {
        // probably no longer necessary due to how we now filter out ".gmail_quote" class
        var startOfQuotedText = messageBodyPlainText.search(/^On.*wrote:$/gm);
        if (startOfQuotedText > 0) {
          messageBodyPlainText = messageBodyPlainText.slice(0, startOfQuotedText - 1);
        }
        return messageBodyPlainText;
    }

    function remove_urls(messageBodyPlainText){
        // Regex taken from: http://daringfireball.net/2010/07/improved_regex_for_matching_urls
        messageBodyPlainText = messageBodyPlainText.replace(/\b((?:[a-z][\w\-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u00AB\u00BB\u201C\u201D\u2018\u2019]))/gm, "");
        return messageBodyPlainText;
    }

    // respondable decision tree for basic plans
    function calculate_respondable(values) {
      if(isNaN(values.fleschKincaidGradeLevel)) {
        return 0;
      }
      values.gradeLevel = values.fleschKincaidGradeLevel;
      return values.questionCount<=.5?values.wordCount<=8.5?values.wordCount<=1.5?values.subjectWordCount<=1.5?.0733218726262:values.wordCount<=.5?values.subjectWordCount<=3.5?.122914695147:values.subjectWordCount<=6.5?.145072640304:.136819773707:.198588629296:values.subjectWordCount<=1.5?.183093642547:values.gradeLevel<=-.5?.233720662678:values.gradeLevel<=6.60000038147?values.wordCount<=5.5?.298683848408:.331874554526:.239006626723:values.subjectWordCount<=8.5?values.wordCount<=27.5?values.gradeLevel<=9.55000019073?values.subjectWordCount<=1.5?.293673297115:values.wordCount<=14.5?.364595175403:.404888696187:values.subjectWordCount<=2.5?.222421363921:values.wordCount<=18.5?.270453843779:.310890101508:values.gradeLevel<=8.35000038147?values.wordCount<=42.5?values.gradeLevel<=6.94999980927?.440158977657:.342750033472:values.subjectWordCount<=5.5?.488104735817:.444063461816:values.gradeLevel<=12.6499996185?values.wordCount<=45.5?.368664498767:.422755603703:values.subjectWordCount<=2.5?.301067569327:.362248185477:values.subjectWordCount<=11.5?values.gradeLevel<=7.55000019073?values.gradeLevel<=5.75?values.wordCount<=27.5?.358084714549:.395812603648:.349450481024:values.wordCount<=51.5?.279985077411:.32959622704:values.wordCount<=45.5?values.gradeLevel<=5.25?.353435874737:.283088917765:values.subjectWordCount<=14.5?.274152329667:.217044023225:values.gradeLevel<=5.25?values.wordCount<=6.5?.420758888124:values.wordCount<=128.5?values.wordCount<=77.5?values.subjectWordCount<=6.5?values.subjectWordCount<=2.5?.67648619614:.709810436737:values.subjectWordCount<=8.5?.677379753211:.650595011842:values.questionCount<=1.5?.614993253257:.678938269094:values.wordCount<=225.5?.594625955588:.536892361111:values.subjectWordCount<=7.5?values.gradeLevel<=15.0500001907?values.wordCount<=217.5?values.gradeLevel<=6.15000009537?values.wordCount<=57.5?.419728703201:.650999617694:values.gradeLevel<=9.94999980927?.643357674014:.570643437792:values.gradeLevel<=8.35000038147?values.questionCount<=2.5?.527971302363:.564875018061:.498302465998:.35612802498:values.subjectWordCount<=11.5?values.wordCount<=219.5?values.wordCount<=57.5?.436006795099:.556456089708:.413799723545:.371808875454;
    }

    /**
     * @param messageData [composeBody, subject]
     */
    var calculate_email_readability_metrics = function(messageData)
    {
        var messageBodyPlainText = messageData[0];
        var subject = messageData[1];

        messageBodyPlainText = messageBodyPlainText.substring(0, MAX_TEXT_LENGTH);
        messageBodyPlainText = remove_quoted_text(messageBodyPlainText);
        messageBodyPlainText = remove_urls(messageBodyPlainText)
        var wordCount = word_count(messageBodyPlainText);
        var sentenceCount = sentence_count(messageBodyPlainText);
        var syllableCount = syllable_count(messageBodyPlainText);
        var gradeLevel = flesch_kincaid_grade_level(wordCount, sentenceCount, syllableCount);
        var questionCount = question_count(messageBodyPlainText);
        var values = {
            "wordCount" : wordCount,
            "fleschKincaidGradeLevel" : gradeLevel,
            "sentenceCount" : sentenceCount,
            "syllableCount" : syllableCount,
            "questionCount" : questionCount,
            "subjectWordCount" : (subject.match(/\S+/g) || []).length
        };
        values["respondableScore"] = calculate_respondable(values);
        return values;
    }

    // Functions to export. I think we only need calculate_email_readability_metrics, but just in case...
    return {
        word_count: word_count,
        sentence_count: sentence_count,
        syllable_count: syllable_count,
        flesch_kincaid_grade_level: flesch_kincaid_grade_level,
        question_count: question_count,
        calculate_email_readability_metrics: calculate_email_readability_metrics
    };
})();

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting == "list_extensions"){
        //asynchronously get a list of all Chrome extensions for debugging purposes
        chrome.management.getAll(function(extensions){
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {greeting: "extensions", extensions: extensions}, function(response) {
              });
            });
        });
    }
    else if (request.greeting == "track_event"){
      var data = request.data; // in the form ["category", "action", "label" (optional)]
      var event_name = data[0].replaceAll("-", "_").replaceAll(" ", "_");
      var event = { name: event_name };
      if (data[1] != null) {
        var action = data[1].replaceAll("-", "_").replaceAll(" ", "_");
        var params = { action: action };
        if (data[2] != null) {
            var label = data[2].replaceAll("-", "_").replaceAll(" ", "_");
            params.label = label;
        }
        event.params = params;
      }

      const measurement_id = 'G-48B3G8LRPQ';
      const api_secret = 'uIAXRk5NR3m2Mef57TbpxQ';
      chrome.tabs.sendMessage(sender.tab.id, {greeting: "get_ga_cid"}, function(response) {
        fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${measurement_id}&api_secret=${api_secret}`, {
            method: "POST",
            body: JSON.stringify({
              client_id: response.ga_cid,
              events: [event]
            })
          });    
      });
    }
    else if (request.greeting == "respondable_input") {
      // Message-passing: Background page to Web Worker
      var emailMeterCalculations = BoomerangEmailMeterWorkerObject.calculate_email_readability_metrics([request.composeBodyText, request.subject]);
      chrome.tabs.sendMessage(sender.tab.id, {greeting: "respondable_output", metrics: emailMeterCalculations});
    }
    else if (request.greeting == "open_tab") {
      chrome.windows.create({
        url: request.url,
        width: request.width,
        height: request.height,
        top: request.top,
        left: request.left,
      }, function(win) {
        chrome.windows.onRemoved.addListener(function(windowId) {
            if(win.id === windowId) { 
              sendResponse();
            }
        });
      });
      return true;
    }
});

chrome.runtime.onInstalled.addListener(function(details) {
  if (details.reason === "install") {
    chrome.tabs.create({url: "https://www.boomeranggmail.com/post_install.html"}, function (tab) {
    });
  }
});


