@echo off
setlocal
set MAVEN_PROJECTBASEDIR=%~dp0

if defined JAVA_HOME (
  set JAVA=%JAVA_HOME%\bin\java.exe
) else (
  set JAVA=java
)

"%JAVA%" -jar "%MAVEN_PROJECTBASEDIR%\.mvn\wrapper\maven-wrapper.jar" %*
