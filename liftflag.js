jQuery(document).bind("flagGlobalAfterLinkUpdate", function(event, data) {
  // flagAction will be 'flagged' or 'unflagged'.
  var flagAction = data.flagStatus;

  // Prep data to be sent to Acquia Lift. This will be made available for
  // building segments and other personalization.
  var payload = ['captureView', flagAction, {
    flagName: data.flagName,
    entityType: data.entityType,
    contentId: data.contentId,
  }];

  // Debug
  // console.log('event:');
  // console.log(event);
  console.log('data:');
  console.log(data);
  console.log('payload:');
  console.log(payload);

  _tcaq.push(payload);
});
