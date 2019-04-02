let rmdir = require( '../lib/rmdir' );

rmdir( __dirname + '/assets', ( err, dirs, files ) => {
  if( err ) return console.log( 'err', err );
  console.log( 'dirs : \n', dirs );
  console.log( 'files : \n', files );
  console.log( 'all files are removed' );
});
