function fuckYesWare() {
  var ONE_DAY = 60 * 60 * 24 * 1000;
  var YesterdayformattedDate = Utilities.formatDate(new Date(new Date().getTime()-ONE_DAY), "GMT", "yyyy/MM/dd");
  var GlobalLables = GmailApp.getUserLabels();
  var yeswarelabel = {};
  
  for (var l = 0; l < GlobalLables.length; l++) {
    if(GlobalLables[l].getName() == "includes-yesware") {
      yeswarelabel = GlobalLables[l];
    }
  }
  
  
  var threads = GmailApp.search("is:unread after:"+YesterdayformattedDate); // search for unread emails
  for (var i = 0; i < threads.length; i++) {
    // Loop though the threads
    var messages = threads[i].getMessages();
    for (var m = 0; m < messages.length; m++) {
      if(messages[m].getRawContent().indexOf("t.yesware.com") != -1) { // yesware detection
        messages[m].markRead() // fuck off
        threads[i].addLabel(yeswarelabel) // and let me know as well
      }
      if(messages[m].getRawContent().indexOf("track.mixmax.com") != -1) { // mixmax detection
        messages[m].markRead() // fuck off
        threads[i].addLabel(yeswarelabel) // and let me know as well
      }    
      if(messages[m].getRawContent().indexOf("replygu.com") != -1) { // replygu? detection
        messages[m].markRead() // fuck off
        threads[i].addLabel(yeswarelabel) // and let me know as well
      }    
    }
  }
};
