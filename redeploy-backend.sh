git fetch
git reset origin/main --hard

source venv/bin/activate
python3.12 -m pip install -r requirements.txt

#cd frontend
#npm run build

#cd /home/ec2-user/Roulettech-Take-Home-App

# Set appropriate permissions for repo
sudo chown -R ec2-user:nginx /home/ec2-user/Roulettech-Take-Home-App
chmod -R 770 /home/ec2-user/Roulettech-Take-Home-App

# Set appropriate permissions for React build files
#chmod -R 750 /home/React-DRF-Task-Manager-App/frontend/build

#sudo systemctl restart gunicorn