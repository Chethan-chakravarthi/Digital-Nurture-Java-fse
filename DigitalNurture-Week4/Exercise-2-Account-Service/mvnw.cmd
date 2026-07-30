@echo off
setlocal
set MAVEN_CMD=mvn
if exist "%MAVEN_HOME%\bin\mvn.cmd" (
  set MAVEN_CMD=%MAVEN_HOME%\bin\mvn.cmd
) else if exist "C:\Program Files\JetBrains\IntelliJ IDEA 2026.1.3\plugins\maven\lib\maven3\bin\mvn.cmd" (
  set MAVEN_CMD="C:\Program Files\JetBrains\IntelliJ IDEA 2026.1.3\plugins\maven\lib\maven3\bin\mvn.cmd"
)

%MAVEN_CMD% %*
