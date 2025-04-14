@isTest
private class ContactBOTest {

@isTest
    static void testCreateContact() {
        User adminUser = [SELECT Id FROM User WHERE Email = 'marceloqueirozoc@gmail.com' LIMIT 1];
        System.runAs(adminUser){
            try{
                Test.startTest();    
                    ContactBO.createContact('Pedro', 'Paulo', 'pp@test.com', '111224-5555');
                Test.stopTest();
            } catch (Exception e) {
                System.assertEquals('Campos Nome e Sobrenome são obrigatórios.', e.getMessage());
            }
        }
    }   

@isTest
    static void testCreateContactWithEmptyFirstName() {
        User adminUser = [SELECT Id FROM User WHERE Email = 'marceloqueirozoc@gmail.com' LIMIT 1];
        System.runAs(adminUser){
            try {
                Test.startTest();
                    ContactBO.createContact('', 'Test Contact', 'marceloqueirozoc@gmail.com', '5555-5555');
                Test.stopTest();
            } catch (Exception e) {
                System.assertEquals('Campos Nome e Sobrenome são obrigatórios.', e.getMessage());
            }
        }
    }
}