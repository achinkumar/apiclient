'use strict';

exports.port = process.env.PORT || 3000;
exports.mongodb = {
  uri: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'localhost/drywall'
};
exports.companyName = 'Acme, Inc.';
exports.projectName = 'Drywall';
exports.systemEmail = 'achin@individuality.in	';
exports.cryptoKey = 'k3yb0ardc4t';
exports.requireAccountVerification = false;
exports.smtp = {
  from: {
    name: process.env.SMTP_FROM_NAME || exports.projectName +' Website',
    address: process.env.SMTP_FROM_ADDRESS || 'achin@individuality.in'
  },
  credentials: {
    user: process.env.SMTP_USERNAME || 'achin@individuality.in',
    password: process.env.SMTP_PASSWORD || 'nodejs',
    host: process.env.SMTP_HOST || 'smtp.outlook.com',
    ssl: true
  }
};
exports.oauth = {	
  twitter: {
    key: process.env.TWITTER_OAUTH_KEY || '',
    secret: process.env.TWITTER_OAUTH_SECRET || ''
  },
  facebook: {
    key: process.env.FACEBOOK_OAUTH_KEY || '',
    secret: process.env.FACEBOOK_OAUTH_SECRET || ''
  },
  github: {
    key: process.env.GITHUB_OAUTH_KEY || '',
    secret: process.env.GITHUB_OAUTH_SECRET || ''
  }
};
