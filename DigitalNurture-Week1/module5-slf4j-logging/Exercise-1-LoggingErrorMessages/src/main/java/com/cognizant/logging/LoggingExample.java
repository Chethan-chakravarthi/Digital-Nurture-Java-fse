package com.cognizant.logging;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExample {
    private static final Logger logger =
            LoggerFactory.getLogger(LoggingExample.class);

    public static void main(String[] args) {
        logger.info("Application Started");
        logger.debug("Loading Employee Details");
        logger.warn("Employee salary is missing");
        logger.error("Database Connection Failed");
        logger.info("Application Closed");
    }
}