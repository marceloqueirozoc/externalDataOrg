public class ContactService {
    public static void createContacts(String firstName, String lastName, String email, String phone){
        if (String.isBlank(firstName) || String.isBlank(lastName)){
            System.debug('Campos Nome e Sobrenome são obrigatórios');
        }

        Contact newContact = new Contact(
            FirstName = firstName,
            LastName = lastName,
            Email = email,
            Phone = phone);
        
        try {
            insert newContact;
        } catch (DmlException e) {
            System.debug('Erro ao criar o contato ' + e.getMessage());
        }    
    }
}