function chuck (something) {
    if (something === true) return !true; //or simply return !true
    return something;
  }
  
  const chuck = (something) => (something === true) ? !true : true;