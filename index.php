<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
require_once 'php/FileSystem.php';
require_once 'php/FilesTree.php';
$fileSystem = new FileSystem();


$files = $fileSystem->getFileList(__DIR__."/samples/");

$viewFilesTree = FilesTree::drawTree($files, 0, "");

include '/html/index.phtml';
?>
