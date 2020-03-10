module.exports = {
  name: 'ui-document',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/document',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
