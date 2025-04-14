public class CaseHelper {
    public static void setDescriptionOnInsert(List<Case> cases) {
        for (Case c : cases) {
            c.Description = 'Novo';
        }
    }

    public static void setDescriptionOnUpdate(List<Case> cases) {
        for (Case c : cases) {
            c.Description = 'Alterado';
        }
    }
}