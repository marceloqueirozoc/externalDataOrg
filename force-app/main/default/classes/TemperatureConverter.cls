public class TemperatureConverter {
    public static Decimal FahrenheitToCelsius(Decimal fh){
        Decimal cs = (fh - 32) * 5/9;
        System.debug('Resultado do calculo' + cs);
        return cs.setScale(2);
    }
}