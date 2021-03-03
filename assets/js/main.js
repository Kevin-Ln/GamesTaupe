            /* modal custom*/
            var modal = document.getElementById("myModal");
            var sclose = document.getElementsByClassName("close")[0];
            var send = document.getElementById("envoyer");
            var wannaplay = document.getElementById("wannaplay");
            var vpseudo = document.getElementById("pseudo");

            wannaplay.onclick = function() {
                modal.style.display = "block";
            };

            sclose.onclick = function() {
                modal.style.display = "none";
            };

            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            };
            /* enregistrement du pseudo dans le local stroage*/
            if(!localStorage.getItem('pseudo')) {
                populateStorage();
            } else {
                setStyles();
            }

            function populateStorage() {
                localStorage.setItem('pseudo', document.getElementById('pseudo').value);

                setStyles();
            }

            function setStyles() {
                var currentPseudo = localStorage.getItem('pseudo');
                document.getElementById('pseudo').value = currentPseudo;
            }

            vpseudo.onchange = populateStorage;  
