cornerstoneTools.init();
cornerstoneWebImageLoader.external.cornerstone = cornerstone;

const imageId = 'https://images.unsplash.com/photo-1558981420-c532902e58b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2077&q=80';

var element = document.getElementById('cornerstone-element-container');

cornerstone.enable(element);
cornerstone.loadImage(imageId).then(function(image) {
  cornerstone.displayImage(element, image);
});

const RectangleRoiTool = cornerstoneTools.RectangleRoiTool;
cornerstoneTools.addTool(RectangleRoiTool);
cornerstoneTools.setToolActive('RectangleRoi', { mouseButtonMask: 1 });
