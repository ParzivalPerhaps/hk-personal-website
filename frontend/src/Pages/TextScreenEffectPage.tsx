import { Unity, useUnityContext } from "react-unity-webgl";
import { PersonalLogo } from "../Components/Logo";
import { RedirectArrow } from "../Components/Redirect";

export const TextScreenEffectPage = () => {
    
    const { unityProvider } = useUnityContext({
        loaderUrl: "/textScreenEffect/Buildd.loader.js",
        dataUrl: "/textScreenEffect/Buildd.data",
        frameworkUrl: "/textScreenEffect/Buildd.framework.js",
        codeUrl: "/textScreenEffect/Buildd.wasm",
      });
    
      

      return (<div className="Island" style={{height:'900px', width:'70%'}}>
            <div className="IslandHeader">
                <p>Text Effect Demo (Left Click to toggle effect)</p>
            </div>
            <Unity style={{justifySelf:'center', alignSelf:'center', margin:'auto', position:'absolute', height:'750px', width:'fit-content', left:'22%', top:'15rem', borderRadius:'4px'}} unityProvider={unityProvider} />
        </div>)
        
        /*
        return (
            <p>H# Demo Currently Under Maintenance</p>
        )
        */
       
    };