<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

class FilesTree 
{
    public static $sampleColors = array(
        "Bass" => "#AE3DFF",
        "Drum" => "#5C49FF",
        "FX"   => "#52C425",
        "Keys" => "#C10953",
        "Loop" => "#E0A133",
        "Sphere" => "#CE3E3B",
        "Voice" => "#C13868",
        "Xtra" => "#A242B7",
        
    );
        

    public static function drawTree($files, $padding=0, $retHTML="", $color = "#667") {

        for ($i = 0; $i < count($files); $i++) 
        {
            $curFile = $files[$i];
            $isDir = isset($curFile['content']);

            if($isDir) 
            {
                $color = self::$sampleColors[$curFile['pure_name']];
                $retHTML .= "<h3 style='padding-left:{$padding}em; color:{$color};' data-name='{$curFile['pure_name']}'>{$curFile['pure_name']}</h3><div>";
            
            } else {
                $retHTML .= "<div class='files_item' draggable='true' 
                    style='padding-left:{$padding}em; color:{$color};' data-name='{$curFile['pure_name']}' data-color='{$color}' data-url='{$curFile['url']}'><header>{$curFile['pure_name']}</header></div>";
            }
            

            
            if (isset($curFile['content'])) 
            {
                $padding += 1.0;
                $retHTML = self::drawTree($curFile["content"], $padding, $retHTML, $color);
                $retHTML .= "</div>";
                $padding -= 1.0;
            }
        }

        return $retHTML;
    }
}
?>
