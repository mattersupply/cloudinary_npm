console.log('CLOUDINARY ENTRY POINT')
console.log(process)
console.log(process.versions)

module.exports = Number(process.versions.node.split('.')[0]) < 8 ? require('./lib-es5/cloudinary') : require('./lib/cloudinary');
