public with sharing class CalloutController {

    public List<userwrap> ConsoleWrapperList {get;set;}

    @AuraEnabled
    public static List<userwrap> getusercallout(){

        List<userwrap> ConsoleWrapperList = new List<userwrap>();

        HttpRequest request = new HttpRequest();
        HttpResponse response = new HttpResponse();

        Http http = new Http();

        request.setEndpoint('https://my.api.mockaroo.com/users.json?key=79ce0460');
        request.setMethod('POST');
        request.setHeader('Content-Type', 'application/json');

        response = http.send(request);

        System.debug('Passei Aqui 1-> ' + response.getBody());

        if(response.getStatusCode() == 200 && response.getBody() != null){
            System.debug('Entrei Aqui -> ' + response.getBody());
            ConsoleWrapperList = (List<userwrap>)json.deserialize(response.getBody(), List<userwrap>.class);
        }
        System.debug('Return -> ' + ConsoleWrapperList);
        return ConsoleWrapperList;
    }

}