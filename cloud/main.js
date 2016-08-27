
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Cloud.define('sendPushToCustomers', function(request, response){

	var objectId = request.params.objectID;
	var message = request.params.message;

	Parse.Push.send({
  	channels: objectId,
  	data: {
    alert: message;
  }
}, {
  success: function() {
    
    response.success('SUCCESSFULLY SENT');
  },
  error: function(error) {

  	response.error(error);
  },
  useMasterKey: true
});
});
