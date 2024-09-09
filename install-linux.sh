#!/bin/bash
echo "Installing Warehouse Inventory Management System"

# Check if user is sudo
if [ "$EUID" -ne 0 ]
  then echo "Please run as root"
  exit
fi

# Check if curl is installed
if command -v curl > /dev/null 2>&1; then
    echo "curl is installed"
else
    echo "curl is not installed"
    sudo apt-get install curl -y
fi

# Check if unzip is installed
if command -v unzip > /dev/null 2>&1; then
    echo "unzip is installed"
else
    echo "unzip is not installed"
    sudo apt-get install unzip -y
fi

# Check if systemctl is installed
if command -v systemctl > /dev/null 2>&1; then
    echo "systemctl is installed"
else
    echo "systemctl is not installed"
    sudo apt-get install systemd -y
fi

# Get the latest release from github api
url=$(curl -s https://api.github.com/repos/drew-chase/Warehouse-Inventory-Management-System/releases/latest | grep "browser_download_url" | cut -d : -f 2,3 | tr -d \" | tr -d ' ' | grep linux);

# Check if the url is empty
if [ -z "$url" ]; then
    echo "Failed to get the latest release"
    exit
fi


# Download the latest release from github using curl
echo "Downloading the latest release from $url"
sudo curl -L -o warehouse.zip "$url"

# Unzip the downloaded file to /usr/share/warehouse
unzip warehouse.zip -d /usr/share/warehouse
sudo chmod +x /usr/share/warehouse/warehouse


# Create service in /systemd/system/warehouse.service
sudo bash -c 'cat <<EOF > /etc/systemd/system/warehouse.service
[Unit]
Description=Warehouse Inventory Management System server
StartLimitIntervalSec=0
After=network.target

[Service]
Type=simple
Restart=always
RestartSec=1
User=administrator
ExecStart=/usr/share/warehouse/warehouse

[Install]
WantedBy=multi-user.target
EOF'

# Reload the systemd daemon
sudo systemctl daemon-reload
sudo systemctl enable warehouse
sudo systemctl start warehouse

# Clean up
sudo rm warehouse.zip

# Create uninstall script
echo "Creating uninstall script"
sudo bash -c 'cat <<EOF > /usr/share/warehouse/uninstall.sh
#!/bin/bash
echo "Uninstalling Warehouse Inventory Management System"
sudo systemctl stop warehouse
sudo systemctl disable warehouse
sudo rm /etc/systemd/system/warehouse.service
sudo rm /usr/bin/warehouseserver
sudo rm -rf /usr/share/warehouse
sudo systemctl daemon-reload
sudo rm /usr/share/warehouse/uninstall.sh
sudo rm /usr/bin/uninstall-warehouse
echo "Warehouse Inventory Management System uninstalled successfully"
EOF'
sudo ln -s /usr/share/warehouse/uninstall.sh /usr/bin/uninstall-warehouse
sudo chmod +x /usr/bin/uninstall-warehouse
echo "Warehouse Inventory Management System installed successfully"
echo "Run 'uninstall-warehouse' to uninstall"