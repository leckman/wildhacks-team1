function displaySunnyResults() {
    var result = 'Go on a drive today!';
    
    resultNode = document.createElement('h4');
    resultNode.textContent = 'Result: ' + result;
    document.querySelector('body').appendChild(resultNode);
  }
  function displayCloudyResults() {
    var result = 'Watch a show: Criminal Minds, Bridgerton, Euphoria, etc.';
    
    resultNode = document.createElement('h4');
    resultNode.textContent = 'Result: ' + result;
    document.querySelector('body').appendChild(resultNode);
  }
  function displayRainyResults() {
    var result = 'Read a book: Pride and Prejudice, The Handsmaids Tale, The Woman in the  Window, etc.';
    
    resultNode = document.createElement('h4');
    resultNode.textContent = 'Result: ' + result;
    document.querySelector('body').appendChild(resultNode);
  }
  function displaySnowyResults() {
    var result = 'Go get a snow cone!';
    
    resultNode = document.createElement('h4');
    resultNode.textContent = 'Result: ' + result;
    document.querySelector('body').appendChild(resultNode);
  }
