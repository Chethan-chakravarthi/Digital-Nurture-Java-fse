package com.example.fsd.patterns.adapter;

/**
 * A simple adapter pattern to make a legacy printer work with a modern system.
 */
// Legacy printer
class LegacyPrinter {
    public void printLegacy(String text) {
        System.out.println("Legacy Printer: " + text);
    }
}

// Modern printer interface
interface ModernPrinter {
    void print(String text);
}

// Adapter
class PrinterAdapter implements ModernPrinter {
    private LegacyPrinter legacyPrinter;

    public PrinterAdapter(LegacyPrinter legacyPrinter) {
        this.legacyPrinter = legacyPrinter;
    }

    @Override
    public void print(String text) {
        legacyPrinter.printLegacy(text);
    }
}

public class AdapterPattern {
    public static void main(String[] args) {
        LegacyPrinter legacyPrinter = new LegacyPrinter();
        ModernPrinter modernPrinter = new PrinterAdapter(legacyPrinter);

        modernPrinter.print("Hello, world!");
    }
}
