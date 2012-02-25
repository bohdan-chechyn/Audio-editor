<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

class FilesTree 
{
   public static function drawTree($files, $padding=0, $retHTML="") 
   {
      
      for($i = 0; $i < count($files); $i++) 
      {
         $curFile = $files[$i];
         $isDir = isset($curFile['content']);
         
      
         $retHTML .= "<div class='files_item' ".($isDir ? "" : " draggable='true' " ).
                 " style='padding-left:".$padding."em;' url='".$curFile['url']."'><header>".$curFile['pure_name']."</header></div>";
         if(isset($curFile['content'])) {
            $padding += 0.5;
            $retHTML = self::drawTree($curFile["content"], $padding, $retHTML);
            $padding -= 0.5;
         } 
      }
      
      return $retHTML;
   }
}
?>
