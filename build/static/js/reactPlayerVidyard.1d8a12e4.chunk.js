(self.webpackChunkcoderscongress_github_io=self.webpackChunkcoderscongress_github_io||[]).push([[392],{3302:(e,t,a)=>{var r,s=Object.create,o=Object.defineProperty,l=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,n=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty,h=(e,t,a,r)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let s of i(t))p.call(e,s)||s===a||o(e,s,{get:()=>t[s],enumerable:!(r=l(t,s))||r.enumerable});return e},u=(e,t,a)=>(((e,t,a)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a})(e,"symbol"!==typeof t?t+"":t,a),a),y={};((e,t)=>{for(var a in t)o(e,a,{get:t[a],enumerable:!0})})(y,{default:()=>P}),e.exports=(r=y,h(o({},"__esModule",{value:!0}),r));var d=((e,t,a)=>(a=null!=e?s(n(e)):{},h(!t&&e&&e.__esModule?a:o(a,"default",{value:e,enumerable:!0}),e)))(a(6911)),c=a(8666),m=a(8300);class P extends d.Component{constructor(){super(...arguments),u(this,"callPlayer",c.callPlayer),u(this,"mute",(()=>{this.setVolume(0)})),u(this,"unmute",(()=>{null!==this.props.volume&&this.setVolume(this.props.volume)})),u(this,"ref",(e=>{this.container=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){const{playing:t,config:a,onError:r,onDuration:s}=this.props,o=e&&e.match(m.MATCH_URL_VIDYARD)[1];this.player&&this.stop(),(0,c.getSDK)("https://play.vidyard.com/embed/v4.js","VidyardV4","onVidyardAPI").then((e=>{this.container&&(e.api.addReadyListener(((e,t)=>{this.player||(this.player=t,this.player.on("ready",this.props.onReady),this.player.on("play",this.props.onPlay),this.player.on("pause",this.props.onPause),this.player.on("seek",this.props.onSeek),this.player.on("playerComplete",this.props.onEnded))}),o),e.api.renderPlayer({uuid:o,container:this.container,autoplay:t?1:0,...a.options}),e.api.getPlayerMetadata(o).then((e=>{this.duration=e.length_in_seconds,s(e.length_in_seconds)})))}),r)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){window.VidyardV4.api.destroyPlayer(this.player)}seekTo(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("seek",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}setPlaybackRate(e){this.callPlayer("setPlaybackSpeed",e)}getDuration(){return this.duration}getCurrentTime(){return this.callPlayer("currentTime")}getSecondsLoaded(){return null}render(){const{display:e}=this.props,t={width:"100%",height:"100%",display:e};return d.default.createElement("div",{style:t},d.default.createElement("div",{ref:this.ref}))}}u(P,"displayName","Vidyard"),u(P,"canPlay",m.canPlay.vidyard)}}]);
//# sourceMappingURL=reactPlayerVidyard.1d8a12e4.chunk.js.map