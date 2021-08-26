import {NativeModules} from 'react-native';
import MyModule from './MyModule'; // 实现自定义 Native Modules 的地方

NativeModules.MyModule = MyModule; // 挂载 MyModule
