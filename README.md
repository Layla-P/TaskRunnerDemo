# TaskRunnerDemo
A brief demo on how gulp can be incorporated into Visual Studio
---------------------------------------------------------------------------------
Install nodejs, this can be done manually or by chocolatey (my preferred way)

Install chocolately
https://chocolatey.org/install
Ensure "Set-ExecutionPolicy RemoteSigned"  in powershell (run as administrator) - enter the following script:
(powershell.exe)
iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
(powershell v3+)
iwr https://chocolatey.org/install.ps1 -UseBasicParsing | iex
Or in cmd.exe:
@powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"

---------------------------------------------------------------------------------------------------
More details on what can be done with Chocolately:
https://chocolatey.org/
cmd.exe as administrator run the following
choco install nodejs
------------------------------------------------------------------------------------------
To get nodejs working in cmd or powershell
Add the following to PATH variable in the USER VARIABLE section of Environment Variables:
C:\Program Files\nodejs\
--------------------------------------------------------------------------------------------
Install grunt on the cmd.exe as admin
npm install -g gulp
-------------------------------------------------------------------------------------------
To run the task runner from within Visual Studio 2013, the task runner explorer is needed:
https://visualstudiogallery.msdn.microsoft.com/8e1b4368-4afb-467a-bc13-9650572db708
Package Intellisense – this provides various tools for npm, gulp, grunt etc
https://visualstudiogallery.msdn.microsoft.com/65748cdb-4087-497e-a394-2e3449c8e61e

---------------------------------------------------------------------------------------------
Adding git to your solution:
In powershell, cd into the solution folder and enter the command:
npm init
You will then be lead theough a series of instructions.
Add a file called gulpfile.js to the solution as well .
--------------------------------------------------------------------------------------
That is the solution set up.
To install the nodejs packages required by the project, type the following command in powershell in the solution folder:
npm install
You will then see 'node modules' added (you will need to do this whenever you add a dependency)
-------------------------------------------------------------------------------
To run the task from powershell... if you just want the default list to run, type 'gulp' into powershell.  To specify a particular task, just type 'gulp <task-name>'
---------------------------------------------------------------------------
To bind the tasks to the build, open up task explorer (view > other windows > task runner explorer)
You should see your gulpfile.js within the task runner.  right click on the task list, eg 'default' and add binding.  The task will then be run at the point you have specified.
------------------------------------------------------------------------
Gulp tasks can be incorporated into your build process.  For example in 'Visual Studio Team Services' (TFS on line) you can add gulp as a build step.
