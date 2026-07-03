# 📱 Mobile Automation Framework - Appium & WebdriverIO 

## 🛠 configuration d'env & Technologies Utilisées

### installer le node et le npm : tps:/nodejs.org/en/download/.
- Verifier les versions de npm et node : 

```bash
node -v 
npm -v
```

###  Installer Java JDK17 
- telecharger à partir : https://adoptium.net/temurin/releases/?version=17
- Ajouter **JAVA_HOME** dans les variables systèmes : C:\Program Files\Eclipse Adoptium\jdk-17.0.17.10-hotspot
- Ajouter dans variable système --> path : 
    * %JAVA_HOME%\bin
    * C:\Program Files\Eclipse Adoptium\jdk-17.0.17.10-hotspot\bin

### Installation d'appium V2
```bash
npm install -g appium
appium -v
```

### Installer le driver : 
```text
- Dans le cas d'Android : **UIAUTOMATOR** 
- Dans le cas d'IOS : **XCUITEST**
```
```bash
appium driver install uiautomator2
appium driver install xcuitest
appium driver list 
```

### Installer Appium doctor 
```bash
npm install -g appium-doctor
appium-doctor --android
appium-doctor –ios
```

### Installer Command line Tools : 
- https://developer.android.com/studio?hl=fr
```text
- Telecharger le command line tools , ensuite le decompresser dans le repertoire dont le nom est Android
- Dans cmdline-tools creée un nouveau dossier latest: est deplacé le contenue du dossier dedans 
- ajouter le chemin du dossier cmdline-tools/latest/bin                  
- ajouter le chemin du Home Android
```

### Installer le SDK Android et les outils de platforme :
```bash
sdkmanager.bat --list
sdkmanager "platform-tools" "platforms;android-33"
```
- ajouter le chemin du dossier platform-tools (la cmd en mode admin)

### Creation de  l'emulator
- dans le path : Android\cmdline-tools\latest\bin
```bash
sdkmanager "platform-tools" "platforms;android-33" "system-images;android-33;google_apis;x86_64"
sdkmanager "sources;android-33"
sdkmanager "build-tools;33.0.2"
``` 
- Ajouter le chemin du dossier build-tools
- Telecharger et installer AVD Manager

```bash
avdmanager create avd -n MyEmulator -k "system-images;android-33;google_apis;x86_64" -d pixel
```
- Lancer l'emulator avec 
```bash 
emulator -avd NOM_DE_VOTRE_EMULATOR
```

### Installer Appium Inspector 
- https://github.com/appium/appium-inspector
- Ajouter les capabilities
```bash
{ 
"platformName": "Android", 
"appium:deviceName": "MyPhoneName", 
"appium:automationName": "UiAutomator2", 
"appium:appPackage": "com.appiumpro.the_app", 
"appium:appActivity": ".MainActivity t2123"
}
```

### Telecharger l'APK
- Option 1 : soit on glisse l'apk vers l'emulator 
- Option 2 : soit on passe la commande 
```bash 
adb install "C:\Users\user\Downloads\apk\NOM_APK"
```
- Verifier le lancement d'emulator 
```bash
adb devices
```
- recuperation des appPackage et le appActivitie
```bash
App Natif: adb shell dumpsys window windows | findstr mCurrentFocus
App Hybride :adb shell dumpsys activity activities | findstr "ResumedActivity"
```

