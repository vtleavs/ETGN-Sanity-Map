del overviewer.js

For /f "tokens=2-4 delims=/ " %%a in ('date /t') do (set mydate=%%c-%%a-%%b)
For /f "tokens=1-2 delims=/:" %%a in ('time /t') do (set mytime=%%a%%b)
echo %mydate%_%mytime%

overviewer --config=.\config.py

git add .
git commit -m "Date: %mydate%, Time: %mytime%"
git push