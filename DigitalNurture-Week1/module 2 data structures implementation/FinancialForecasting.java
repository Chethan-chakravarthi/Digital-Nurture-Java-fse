package com.example.fsd.algorithms;

/**
 * Exercise 7: Financial Forecasting
 *
 * Implements a simple recursive model to predict future investment value.
 */
public class FinancialForecasting {

    /**
     * Predicts the future value of an investment using a recursive approach.
     *
     * @param presentValue The initial value of the investment.
     * @param growthRate   The annual growth rate (e.g., 0.05 for 5%).
     * @param periods      The number of periods (years) to forecast.
     * @return The predicted future value.
     */
    public static double predictFutureValue(double presentValue, double growthRate, int periods) {
        // Base case: If there are no more periods to forecast, return the current value.
        if (periods == 0) {
            return presentValue;
        }

        // Recursive step: Calculate the value for the next period.
        // The new value is the current value plus the growth for one period.
        double nextValue = presentValue * (1 + growthRate);

        // Recur with one less period.
        return predictFutureValue(nextValue, growthRate, periods - 1);
    }

    public static void main(String[] args) {
        // --- Test Financial Forecasting ---
        double initialInvestment = 1000.00; // $1,000
        double annualGrowthRate = 0.07;     // 7% annual growth
        int yearsToForecast = 10;           // Forecast for 10 years

        System.out.println("--- Financial Forecasting ---");
        System.out.println("Initial Investment: $" + String.format("%.2f", initialInvestment));
        System.out.println("Annual Growth Rate: " + (annualGrowthRate * 100) + "%");
        System.out.println("Forecasting for " + yearsToForecast + " years...");

        double futureValue = predictFutureValue(initialInvestment, annualGrowthRate, yearsToForecast);

        System.out.println("\nPredicted Future Value after " + yearsToForecast + " years: $" + String.format("%.2f", futureValue));

        // Another example
        int shortTermYears = 3;
        double shortTermFutureValue = predictFutureValue(initialInvestment, annualGrowthRate, shortTermYears);
        System.out.println("Predicted Future Value after " + shortTermYears + " years: $" + String.format("%.2f", shortTermFutureValue));
    }
}
