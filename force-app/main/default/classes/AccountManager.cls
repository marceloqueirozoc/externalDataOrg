public class AccountManager {
    public static void createAccountWithContact(String accountName, String contactName, String email, String phone) {

        if (String.isBlank(accountName) || String.isBlank(contactName)){
            throw new IllegalArgumentException('O nome da conta e do contato não podem estar vazios');
        }

        List<Account> existingAccounts = [SELECT Id, Name, Phone FROM Account WHERE Name = :accountName LIMIT 1];

        Account acc;
        if (!existingAccounts.isEmpty()) {
            acc = existingAccounts[0];
            System.debug('Conta existente: ' + acc.Name);
        } else {
            acc = new Account(Name = accountName);
            insert acc;
        }
        System.debug('Telefone ' + acc.Phone);
        if (acc.Phone == null){
            acc.Phone = '0000-0000';
            System.debug('Telefone 2' + acc.Phone);
        }
        update acc;

        Contact newContact = new Contact(
            LastName = contactName,
            Email = email,
            AccountId = acc.Id 
        );
        insert newContact;

    }
}