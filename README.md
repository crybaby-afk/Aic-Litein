# AIC Litein — Website

This is a small static website for the AIC Litein Church. Pages are plain HTML with a shared stylesheet and JavaScript.

Image workflow
- Put *original* / high-resolution source photos (RAW/PSD/JPEG) in `assets/src/`.
- Put *optimized* web-friendly images (resized, compressed) in `assets/images/`.
- Pages currently reference images in `assets/images/` (e.g., `assets/images/youth.jpg`).

If you want I can add an image optimization script (Node.js or Python) to automatically generate `assets/images/` from `assets/src/`.

Local testing
```bash
cd /home/crybaby/Aic-Litein
python3 -m http.server 8000
# open http://localhost:8000/
```

If you'd like anything changed about the image organization (different names, additional sizes, srcset, etc.), tell me and I'll update the project accordingly.
