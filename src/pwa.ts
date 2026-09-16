export const PWA_EVENTS={
  offlineReady:'pwa:offline-ready',
  updateReady:'pwa:update-ready',
} as const;

function emit(name:string,detail?:unknown) {
  window.dispatchEvent(new CustomEvent(name,{detail}));
}

export function registerOfflineSupport() {
  if(import.meta.env.DEV||!('serviceWorker' in navigator)) return;
  let hadController=Boolean(navigator.serviceWorker.controller);
  let refreshing=false;

  navigator.serviceWorker.addEventListener('controllerchange',()=>{
    if(!hadController) { hadController=true;return; }
    if(refreshing) return;
    refreshing=true;
    window.location.reload();
  });

  window.addEventListener('load',()=>void (async()=>{
    try {
      const registration=await navigator.serviceWorker.register(`${import.meta.env.BASE_URL}sw.js`,{scope:import.meta.env.BASE_URL});
      const announceUpdate=()=>emit(PWA_EVENTS.updateReady,registration);
      if(registration.waiting&&navigator.serviceWorker.controller) announceUpdate();
      registration.addEventListener('updatefound',()=>{
        const worker=registration.installing;
        if(!worker) return;
        worker.addEventListener('statechange',()=>{
          if(worker.state==='installed'&&navigator.serviceWorker.controller) announceUpdate();
        });
      });
      await navigator.serviceWorker.ready;
      emit(PWA_EVENTS.offlineReady);
    } catch(error) {
      console.warn('离线缓存初始化失败',error);
    }
  })());
}

export function activatePwaUpdate(registration:ServiceWorkerRegistration) {
  registration.waiting?.postMessage({type:'SKIP_WAITING'});
}
