# CompaniesandStudentsApp

1. INSTALL EXPO IN YOUR SYSTEM.....
(npm install -global expo-cli)   --  (global is optional, this will install expo-cli into your computer but you can install expo without global,  but it will install it locally)
expo init myapp                  --  (it will create a new app into that directory), (choose "blank", it will install everything and will give you perfect setup)


2. "main": "node_modules/expo/AppEntry.js",   -- (in package.json you will see this, this is the first this that app calls, it will call this file and whatever in there, it will render it)

3. "AppEntry.js" is the file where expo calls the files, dafualt call will be for App.js nut you can select whichever file you want, and that will be your first file to open.

4. "react-navigation-stack": "^2.10.4"      -------    install it using (npm install @react-navigation/stack)
        https://reactnavigation.org/docs/stack-navigator/
        navigation stact is used for navigating through multiple pages of screens of application
        
5. "@react-native-picker/picker": "^1.16.0", -------   install it using (npm install @react-native-picker/picker --save)
        https://www.npmjs.com/package/@react-native-picker/picker
        you can use inbuild react native picker, but the UI wasn't that good so instead of that, I installed this picker.
        
        you can use this also....
        "react-native-modal-dropdown": "github:siemiatj/react-native-modal-dropdown",
        npm install https://github.com/siemiatj/react-native-modal-dropdown -save
        https://www.npmjs.com/package/react-native-modal-dropdown
        
        
6. "react-native-numeric-input": "^1.9.0",    -------  install it using (npm install react-native-numeric-input --save)
        https://www.npmjs.com/package/react-native-numeric-input
       
7. "react-native-email": "^1.1.0",       ----------    install it using (npm install react-native-email)
        https://www.npmjs.com/package/react-native-email
        this is used to check wheather your email is valid or not

8. "react-native-hyperlink": "^0.0.19",   -------    install it using (npm install react-native-hyperlink)
        https://www.npmjs.com/package/react-native-hyperlink
        It is used to make website link text clickable
        
9. "react-native-table-component": "^1.2.1",   -----   install it using (npm install react-native-table-component)
        https://www.npmjs.com/package/react-native-table-component
        This is similar to react bootstrap table 2
        
10. "expo-image-picker": "~10.1.4",      ----------    install it using (expo install expo-image-picker)
        https://docs.expo.io/versions/latest/sdk/imagepicker/
        you can use this to pick an image from mobile gallery and save it to app
        
