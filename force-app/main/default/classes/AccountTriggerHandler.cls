public class AccountTriggerHandler {
    public static void createContacts(List<Account> newAccounts){
        List<Contact> contactsToInsert = new List<Contact>();

        for(Account acc : newAccounts){
            Contact con = new Contact(
                FirstName = 'Contato Padrão',
                LastName = acc.Name,
                Email = 'teste@test.com',
                AccountId = acc.Id,
                Phone = acc.Phone
            );
            contactsToInsert.add(con);
        }

        if(!contactsToInsert.isEmpty()){
            insert contactsToInsert;
        }
    }
}