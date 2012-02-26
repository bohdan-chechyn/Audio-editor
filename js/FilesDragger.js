function FilesDragger(options) 
{
    if (options != undefined) {
        if (options.dropCallback != undefined) {
            this.handlerDrop = options.dropCallback;
        }
    }
   this.initDraggable = function (element) 
   {
      element.addEventListener('dragstart', this.handlerDragStart, false);
      element.addEventListener('dragend', this.handlerDragEnd, false);
   
   };
   
   this.initDropper = function (element) {
      element.addEventListener('drop', this.handlerDrop, false);
      element.addEventListener('dragover', this.handleDragOver, false);
      element.addEventListener('dragenter', this.handleDragEnter, false);
   }
   if (this.handlerDrop == undefined) {
       this.handlerDrop = function(e)
       {
          e.stopPropagation(); // Stops some browsers from redirecting.
          e.preventDefault();
          //alert(e.dataTransfer.getData('text/html'));
          //dragSrcEl.innerHTML = this.innerHTML;
          this.innerHTML += e.dataTransfer.getData('text/html');
          // get event data
          return false;
       };
   }
   this.handlerDragStart = function(e) {
      // got it
      
      e.dataTransfer.effectAllowed = 'move';
<<<<<<< HEAD
      e.dataTransfer.setData('text/html', '<audio data-title="' + $(this).find('header').text() + '" controls="controls"><source src="'+this.getAttribute('url')+'" type="audio/ogg" /></audio>');
=======
<<<<<<< HEAD
      e.dataTransfer.setData('text/html', '<audio data-name="'+this.getAttribute('data-name')+'" data-color="'+this.getAttribute('data-color')+'" controls="controls"><source src="'+this.getAttribute('data-url')+'" type="audio/ogg" /></audio>');
=======
      e.dataTransfer.setData('text/html', '<audio data-title="' + $(this).find('header').text() + '" controls="controls"><source src="'+this.getAttribute('url')+'" /></audio>');
>>>>>>> dbdbc4f751c62387f4f0a5770cedb7996cc01b5b
>>>>>>> d11cfcec1203d169d6facd10ea6102ed37861f20

      this.style.opacity = '0.4'; 
      return false;
   }
   this.handleDragEnter = function (e) {
     // this / e.target is the current hover target.
     this.classList.add('over');
   }
   this.handleDragOver = function (e) {
     if (e.preventDefault) {
       e.preventDefault(); // Necessary. Allows us to drop.
     }

     e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

     return false;
   }
   this.handlerDragEnd = function () {
       var files = document.querySelectorAll('#files_tree .files_item');
      [].forEach.call(files, function(file) {
         file.style.opacity = '1.0';
      })
       //this.classList.remove('over');
   }
   

};
