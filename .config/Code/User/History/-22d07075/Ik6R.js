var xmlHttp = null;

function GetCustomerInfo()
{
    var CustomerNumber = document.getElementById( "TextBoxAccountName" ).value;
    var Url = "GetAccountInfoAsJson.aspx?number=" + AccountName;

    xmlHttp = new XMLHttpRequest(); 
    xmlHttp.onreadystatechange = ProcessRequest;
    xmlHttp.open( "GET", Url, true );
    xmlHttp.send( null );
}

function ProcessRequest() 
{
    if ( xmlHttp.readyState == 4 && xmlHttp.status == 200 ) 
    {
        if ( xmlHttp.responseText == "Not found" ) 
        {
            document.getElementById( "TextBoxAccountName"    ).value = "Not found";
            document.getElementById( "TextBoxAccountAddress" ).value = "";
        }
        else
        {
            var info = eval ( "(" + xmlHttp.responseText + ")" );

            // No parsing necessary with JSON!        
            document.getElementById( "TextBoxAccountName"    ).value = info.jsonData[ 0 ].cmname;
            document.getElementById( "TextBoxAccountAddress" ).value = info.jsonData[ 0 ].cmaddr1;
        }                    
    }
} 