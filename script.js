document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const imageInput = document.getElementById('imageInput');
    const reverseBtn = document.getElementById('reverseBtn');
    const textOutput = document.getElementById('textOutput');
    const imageOutput = document.getElementById('imageOutput');

    reverseBtn.addEventListener('click', () => {
        // 反转文字（上下翻转）
        if (textInput.value) {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            // 设置画布大小
            ctx.font = '20px Microsoft YaHei';
            const textWidth = ctx.measureText(textInput.value).width;
            canvas.width = textWidth + 20;
            canvas.height = 40;
            
            // 垂直翻转文字
            ctx.translate(0, canvas.height);
            ctx.scale(1, -1);
            ctx.font = '20px Microsoft YaHei';
            ctx.fillText(textInput.value, 10, 30);
            
            // 显示反转后的文字
            textOutput.innerHTML = '';
            const reversedTextImg = document.createElement('img');
            reversedTextImg.src = canvas.toDataURL();
            textOutput.appendChild(reversedTextImg);
        }

        // 反转图片
        if (imageInput.files && imageInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = new Image();
                img.onload = function() {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    
                    // 设置画布大小
                    canvas.width = img.width;
                    canvas.height = img.height;
                    
                    // 垂直翻转图片
                    ctx.translate(0, canvas.height);
                    ctx.scale(1, -1);
                    ctx.drawImage(img, 0, 0);
                    
                    // 显示反转后的图片
                    imageOutput.innerHTML = '';
                    const reversedImg = document.createElement('img');
                    reversedImg.src = canvas.toDataURL();
                    imageOutput.appendChild(reversedImg);
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(imageInput.files[0]);
        }
    });
}); 