package com.example.fsd.patterns.proxy;

/**
 * A simple proxy pattern for controlling access to a sensitive file.
 */
// Subject
interface File {
    void read();
}

// Real subject
class RealFile implements File {
    private String filename;

    public RealFile(String filename) {
        this.filename = filename;
        loadFromDisk();
    }

    private void loadFromDisk() {
        System.out.println("Loading " + filename);
    }

    @Override
    public void read() {
        System.out.println("Reading " + filename);
    }
}

// Proxy
class ProxyFile implements File {
    private RealFile realFile;
    private String filename;
    private boolean isAdmin;

    public ProxyFile(String filename, boolean isAdmin) {
        this.filename = filename;
        this.isAdmin = isAdmin;
    }

    @Override
    public void read() {
        if (isAdmin) {
            if (realFile == null) {
                realFile = new RealFile(filename);
            }
            realFile.read();
        } else {
            System.out.println("Access denied.");
        }
    }
}

public class ProxyPattern {
    public static void main(String[] args) {
        File file1 = new ProxyFile("secret.txt", true);
        file1.read();

        System.out.println();

        File file2 = new ProxyFile("secret.txt", false);
        file2.read();
    }
}
