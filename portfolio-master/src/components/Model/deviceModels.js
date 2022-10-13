
export const ModelAnimationType = {
    SpringUp: 'spring-up',
    LaptopOpen: 'laptop-open',
}

const models = {
    phone: {
        url: "https://meta-park-1301923173.cos.ap-shanghai.myqcloud.com/iphone-11.glb",
        width: 374,
        height: 512,
        position: { x: 0, y: 0, z: 0 },
        animation: ModelAnimationType.SpringUp,
    },
    laptop: {
        url: "https://meta-park-1301923173.cos.ap-shanghai.myqcloud.com/macbook-pro.glb",
        width: 1280,
        height: 800,
        position: { x: 0, y: 0, z: 0 },
        animation: ModelAnimationType.LaptopOpen,
    },
    vr: {
        url: "https://meta-park-1301923173.cos.ap-shanghai.myqcloud.com/vr-glasses.glb",
        width: 1280,
        height: 800,
        position: { x: 0, y: 0, z: 0 },
    },
    child: {
        url: "https://meta-park-1301923173.cos.ap-shanghai.myqcloud.com/child.glb",
        width: 1280,
        height: 800,
        position: { x: 0, y: 0, z: 0 },
    }
}

export default models
