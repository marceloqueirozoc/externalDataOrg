public class LeadCompanyHelper {
    public static void populateCompany(List<Lead> leads) {
        for (Lead lead : leads) {
            if (String.isEmpty(lead.Company)) {
                lead.Company = (lead.FirstName != null ? lead.FirstName + ' ' : '') + lead.LastName;
            }
        }
    }
}