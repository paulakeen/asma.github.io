function showStuff(text, audio)
            {
                let t = document.getElementById(text);
                let a = document.getElementById(audio);

                if (t.style.display == "none")
                {
                    t.style.display = "block";
                    a.currentTime = 0;
                    a.play()
                } else {
                    t.style.display = "none"
                    a.pause()
                }
            }
