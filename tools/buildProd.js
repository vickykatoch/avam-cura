import webpack from 'webpack';
import config from '../webpack.prd.config';

process.env.NODE_ENV = 'production'; // this assures React is built in prod mode and that the Babel dev config doesn't apply.

console.log('Generating minified bundle for production via Webpack. This will take a moment...');

webpack(config).run((err,stats)=>{
    if(err){
        console.log(`ERROR : ${JSON.stringify(err)}`);
        return 1;
    }
    const jsonStats =  stats.toJson();
    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(error => console.log(error));
    }
    if (jsonStats.hasWarnings) {
        console.log(chalkWarning('Webpack generated the following warnings: '));
        jsonStats.warnings.map(warning => console.log(warning));
  }

  console.log(`Webpack stats: ${stats}`);
  console.log('Your app is compiled in production mode in /dist. Its ready to roll!');
  return 0;
});