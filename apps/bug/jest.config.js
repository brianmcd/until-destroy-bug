module.exports = {
  name: 'bug',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/bug',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
