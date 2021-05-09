export const foldersExp = function foldersExports() {
    jQuery(document).ready(function($){
        
        const folderSettingsBtn = document.querySelectorAll('.fa-ellipsis-v');
        
        for(let i = 0; i < folderSettingsBtn.length; i++){
            folderSettingsBtn[i].addEventListener('click', function() {
                const folderSettings = document.querySelectorAll('.settings');
                $(folderSettings[i]).slideToggle('fast', function() {
    
                })
            })
        }


    });
}