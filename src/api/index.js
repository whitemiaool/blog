// const host = 'https://dyxuan.top/api/'
let  host = ''
if(/dyxuan/.test(location.host)) {
    host = 'https://dyxuan.top/api/'
} else {
    host = 'http://localhost:3000'
}

export default {
    getbar:`${host}/getbar`,
    getrepo:`${host}/githubrep`,

    addpaper:`${host}/addonepaper`,
    delonepaper:`${host}/delonepaper`,
    getallpaper:`${host}/getallpaper`,
    getonepaper:`${host}/getonepaper`,
    getpact:`${host}/getpact`,
    updatepaper:`${host}/updatepaper`,
    clickstar:`${host}/clickstar`,
    commentpaper:`${host}/commentpaper`,
    getpapercom:`${host}/getpapercom`,
    starcomment:`${host}/starcomment`,

    addtopic:`${host}/addonetopic`,
    getopic:`${host}/getalltopic`,
    deltopic:`${host}/delonetopic`
}