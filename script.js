 document.addEventListener('DOMContentLoaded', function() {
            const fetchButton = document.querySelector('.fetch-button');
            const urlInput = document.querySelector('.url-input');
            const videoInfo = document.querySelector('.video-info');
            const videoThumbnail = document.querySelector('.thumbnail img');
            const videoTitle = document.querySelector('.video-title');
            const videoDuration = document.querySelector('.video-duration span');
            const mp3Button = document.querySelector('.mp3-btn');
            const mp4Button = document.querySelector('.mp4-btn');
            const progressContainer = document.querySelector('.progress-container');
            const progressBar = document.querySelector('.progress-bar');
            const statusText = document.querySelector('.status-text');
            const downloadComplete = document.querySelector('.download-complete');
            
            // Simulate fetching video info
            fetchButton.addEventListener('click', function() {
                if (urlInput.value.trim() === '') {
                    showError('Please enter a valid URL');
                    return;
                }
                
                // In a real application, you would fetch data from a backend service
                // Here we're just simulating the response
                simulateVideoInfoFetch();
            });
            
            function simulateVideoInfoFetch() {
                // Show loading state
                fetchButton.textContent = 'Fetching...';
                fetchButton.disabled = true;
                
                // Simulate API call delay
                setTimeout(function() {
                    // Sample data for demonstration
                    videoThumbnail.src = 'https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg';
                    videoTitle.textContent = 'Example Video - Manav\'s Downloader Demo';
                    videoDuration.textContent = '3:45';
                    
                    // Show video info section
                    videoInfo.style.display = 'flex';
                    
                    // Reset button
                    fetchButton.textContent = 'Fetch Video';
                    fetchButton.disabled = false;
                    
                    // Show success message
                    showSuccess('Video information successfully retrieved!');
                }, 1500);
            }
            
            // Handle download buttons
            mp3Button.addEventListener('click', function() {
                if (urlInput.value.trim() === '') {
                    showError('Please enter a URL first');
                    return;
                }
                
                startDownload('mp3');
            });
            
            mp4Button.addEventListener('click', function() {
                if (urlInput.value.trim() === '') {
                    showError('Please enter a URL first');
                    return;
                }
                
                startDownload('mp4');
            });
            
            function startDownload(format) {
                // Hide any previous download status
                downloadComplete.style.display = 'none';
                
                // Show progress bar
                progressContainer.style.display = 'block';
                statusText.style.display = 'block';
                statusText.textContent = 'Preparing download...';
                
                // Simulate download progress
                let progress = 0;
                const interval = setInterval(function() {
                    progress += Math.random() * 10;
                    if (progress >= 100) {
                        progress = 100;
                        clearInterval(interval);
                        
                        // Update status text
                        statusText.textContent = 'Finalizing download...';
                        
                        // Show completion after a short delay
                        setTimeout(function() {
                            progressContainer.style.display = 'none';
                            statusText.style.display = 'none';
                            downloadComplete.style.display = 'block';
                            
                            // Show success message
                            showSuccess(`Download completed! Your ${format.toUpperCase()} file is ready.`);
                        }, 800);
                    }
                    
                    // Update progress bar
                    progressBar.style.width = progress + '%';
                    
                    // Update status text
                    if (progress < 30) {
                        statusText.textContent = 'Downloading... ' + Math.round(progress) + '%';
                    } else if (progress < 70) {
                        statusText.textContent = 'Processing... ' + Math.round(progress) + '%';
                    } else {
                        statusText.textContent = 'Almost done... ' + Math.round(progress) + '%';
                    }
                }, 200);
            }
            
            function showError(message) {
                // Create error notification
                const notification = document.createElement('div');
                notification.style.position = 'fixed';
                notification.style.top = '20px';
                notification.style.right = '20px';
                notification.style.padding = '15px 25px';
                notification.style.background = '#FF6B6B';
                notification.style.color = 'white';
                notification.style.borderRadius = '10px';
                notification.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
                notification.style.zIndex = '1000';
                notification.style.fontWeight = '500';
                notification.textContent = message;
                
                document.body.appendChild(notification);
                
                // Remove notification after 3 seconds
                setTimeout(function() {
                    notification.style.opacity = '0';
                    notification.style.transition = 'opacity 0.5s ease';
                    setTimeout(function() {
                        document.body.removeChild(notification);
                    }, 500);
                }, 3000);
            }
            
            function showSuccess(message) {
                // Create success notification
                const notification = document.createElement('div');
                notification.style.position = 'fixed';
                notification.style.top = '20px';
                notification.style.right = '20px';
                notification.style.padding = '15px 25px';
                notification.style.background = '#4CAF50';
                notification.style.color = 'white';
                notification.style.borderRadius = '10px';
                notification.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
                notification.style.zIndex = '1000';
                notification.style.fontWeight = '500';
                notification.textContent = message;
                
                document.body.appendChild(notification);
                
                // Remove notification after 3 seconds
                setTimeout(function() {
                    notification.style.opacity = '0';
                    notification.style.transition = 'opacity 0.5s ease';
                    setTimeout(function() {
                        document.body.removeChild(notification);
                    }, 500);
                }, 3000);
            }
        });