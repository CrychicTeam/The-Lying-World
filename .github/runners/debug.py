import json
import os

# 定义JSON文件的路径
config_file_path = os.path.join(os.environ['GITHUB_WORKSPACE'], 'kubejs', 'config', 'probe-settings.json')

# 读取JSON文件
with open(config_file_path, 'r') as file:
    config_data = json.load(file)

# 修改probejs.enabled为false
config_data['probejs.enabled'] = False

# 写回修改后的JSON文件
with open(config_file_path, 'w') as file:
    json.dump(config_data, file, indent=4)

print(f"Updated {config_file_path}: probejs.enabled is now set to false.")