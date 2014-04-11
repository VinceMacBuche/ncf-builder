

var methods = {
    "permissions_type_recursion": {
        "name": "Permissions type recursion",
        "description": "This is a bundle to ensure that a file or directory is present and has the right mode/owner/group",
        "class_prefix": "permissions",
        "bundle_name": "permissions_type_recursion",
        "class_parameter_id": 1,
        "bundle_args": [
            "path",
            "mode",
            "owner",
            "group",
            "type",
            "recursion"
        ],
        "parameter": [
            {
                "name": "path",
                "description": "Path to edit"
            },
            {
                "name": "mode",
                "description": "Mode of the path to edit"
            },
            {
                "name": "owner",
                "description": "Owner of the path to edit"
            },
            {
                "name": "group",
                "description": "Group of the path to edit"
            },
            {
                "name": "type",
                "description": "Type of the path to edit (all/files/directories)"
            },
            {
                "name": "recursion",
                "description": "Recursion depth to enforce for this path (0, 1, 2, ..., inf)"
            }
        ],
        "class_parameter": "path"
    },
    "file_ensure_lines_in_section_present": {
        "name": "File ensure lines in section",
        "description": "This is a bundle to ensure that a line is present in a section in a specific location. The objective of this method is to handle INI-style files.",
        "class_prefix": "file_ensure_lines_in_section_present",
        "bundle_name": "file_ensure_lines_in_section_present",
        "class_parameter_id": 1,
        "bundle_args": [
            "file",
            "section",
            "content_tab"
        ],
        "parameter": [
            {
                "name": "file",
                "description": "File name to edit"
            },
            {
                "name": "section",
                "description": "Section where the lines should be added"
            },
            {
                "name": "content_tab",
                "description": "Array containing all the entries to add in the file ( tab[section][option]=\"option_content\" )"
            }
        ],
        "class_parameter": "file"
    },
    "logger_rudder": {
        "name": "Logger for Rudder",
        "description": "Logging output for Rudder reports",
        "class_prefix": "   logger_rudder",
        "bundle_name": "logger_rudder",
        "class_parameter_id": 2,
        "bundle_args": [
            "message",
            "class_prefix"
        ],
        "parameter": [
            {
                "name": "message",
                "description": "The common part of the message to display"
            },
            {
                "name": "class_prefix",
                "description": "The prefix of the class for different states"
            }
        ],
        "class_parameter": "class_prefix"
    },
    "file_replace_lines": {
        "name": "File replace lines",
        "description": "This is a bundle to ensure that a line in a file is replaced by another one",
        "class_prefix": "file_replace_lines",
        "bundle_name": "file_replace_lines",
        "class_parameter_id": 1,
        "bundle_args": [
            "file",
            "line",
            "replacement"
        ],
        "parameter": [
            {
                "name": "file",
                "description": "File name to edit"
            },
            {
                "name": "line",
                "description": "Line to match in the file"
            },
            {
                "name": "replacement",
                "description": "Line to add in the file as a replacement"
            }
        ],
        "class_parameter": "file"
    },
    "service_restart": {
        "name": "Service restart",
        "description": "Restart a service using the appropriate method",
        "class_prefix": "service_restart",
        "bundle_name": "service_restart",
        "class_parameter_id": 1,
        "bundle_args": [
            "service_name"
        ],
        "parameter": [
            {
                "name": "service_name",
                "description": "Name of the service to restart in /etc/init.d"
            }
        ],
        "class_parameter": "service_name"
    },
    "service_check_running_ps": {
        "name": "Service check running ps",
        "description": "Check if a service is running using ps",
        "class_prefix": "service_check_running",
        "bundle_name": "service_check_running_ps",
        "class_parameter_id": 1,
        "bundle_args": [
            "service_regex"
        ],
        "parameter": [
            {
                "name": "service_regex",
                "description": "Regular expression used to select a process in ps output"
            }
        ],
        "class_parameter": "service_regex"
    },
    "permissions_recurse": {
        "name": "Permissions (recursive)",
        "description": "Verify if a file or directory has the right permissions recursively",
        "class_prefix": "permissions",
        "bundle_name": "permissions_recurse",
        "class_parameter_id": 1,
        "bundle_args": [
            "path",
            "mode",
            "owner",
            "group"
        ],
        "parameter": [
            {
                "name": "path",
                "description": "Path to the file / directory"
            },
            {
                "name": "mode",
                "description": "Mode to enforce"
            },
            {
                "name": "owner",
                "description": "Owner to enforce"
            },
            {
                "name": "group",
                "description": "Group to enforce"
            }
        ],
        "class_parameter": "path"
    },
    "service_ensure_stopped": {
        "name": "Service ensure stopped",
        "description": "Ensure that a service is stopped using the appropriate method",
        "class_prefix": "service_ensure_stopped",
        "bundle_name": "service_ensure_stopped",
        "class_parameter_id": 1,
        "bundle_args": [
            "service_name"
        ],
        "parameter": [
            {
                "name": "service_name",
                "description": "Service"
            }
        ],
        "class_parameter": "service_name"
    },
    "file_copy_from_local_source_recursion": {
        "name": "File copy from local source recurse",
        "description": "This is a bundle to ensure that a file or directory is copied from a local source",
        "class_prefix": "file_copy_from_local_source",
        "bundle_name": "file_copy_from_local_source_recursion",
        "class_parameter_id": 2,
        "bundle_args": [
            "source",
            "destination",
            "recursion"
        ],
        "parameter": [
            {
                "name": "source",
                "description": "Source file "
            },
            {
                "name": "destination",
                "description": "Destination file"
            },
            {
                "name": "recursion",
                "description": "Recursion depth to enforce for this path (0, 1, 2, ..., inf)"
            }
        ],
        "class_parameter": "destination"
    },
    "service_stop": {
        "name": "Service stop",
        "description": "Stop a service using the appropriate method",
        "class_prefix": "service_stop",
        "bundle_name": "service_stop",
        "class_parameter_id": 1,
        "bundle_args": [
            "service_name"
        ],
        "parameter": [
            {
                "name": "service_name",
                "description": "Service"
            }
        ],
        "class_parameter": "service_name"
    },
    "file_check_exists": {
        "name": "File check exists",
        "description": "Checks if a file exists",
        "class_prefix": "file_check_exists",
        "bundle_name": "file_check_exists",
        "class_parameter_id": 1,
        "bundle_args": [
            "file_name"
        ],
        "parameter": [
            {
                "name": "file_name",
                "description": "File name"
            }
        ],
        "class_parameter": "file_name"
    },
    "service_reload": {
        "name": "Service reload",
        "description": "Reload a service using the appropriate method",
        "class_prefix": "service_reload",
        "bundle_name": "service_reload",
        "class_parameter_id": 1,
        "bundle_args": [
            "service_name"
        ],
        "parameter": [
            {
                "name": "service_name",
                "description": "Service"
            }
        ],
        "class_parameter": "service_name"
    },
    "command_execution": {
        "name": "Command execution",
        "description": "Execute a command",
        "class_prefix": "command_execution",
        "bundle_name": "command_execution",
        "class_parameter_id": 1,
        "bundle_args": [
            "command_name"
        ],
        "parameter": [
            {
                "name": "command_name",
                "description": "Command name"
            }
        ],
        "class_parameter": "command_name"
    },
    "file_from_template": {
        "name": "File from template",
        "description": "This is a bundle to build a file from a template",
        "class_prefix": "file_from_template",
        "bundle_name": "file_from_template",
        "class_parameter_id": 2,
        "bundle_args": [
            "source_template",
            "destination"
        ],
        "parameter": [
            {
                "name": "source_template",
                "description": "Source file containing a template to be expanded"
            },
            {
                "name": "destination",
                "description": "Destination file"
            }
        ],
        "class_parameter": "destination"
    },
    "package_verify": {
        "name": "Package verify",
        "description": "Verify if a package is installed in its latest version available",
        "class_prefix": "package_install",
        "bundle_name": "package_verify",
        "class_parameter_id": 1,
        "bundle_args": [
            "package_name"
        ],
        "parameter": [
            {
                "name": "package_name",
                "description": "Name of the package to verify"
            }
        ],
        "class_parameter": "package_name"
    },
    "permissions_dirs": {
        "name": "Permissions dirs",
        "description": "Verify if a directory has the right permissions non recursively",
        "class_prefix": "permissions",
        "bundle_name": "permissions_dirs",
        "class_parameter_id": 1,
        "bundle_args": [
            "path",
            "mode",
            "owner",
            "group"
        ],
        "parameter": [
            {
                "name": "path",
                "description": "Path of the directory"
            },
            {
                "name": "mode",
                "description": "Mode to enfore"
            },
            {
                "name": "owner",
                "description": "Owner to enforce"
            },
            {
                "name": "group",
                "description": "Group to enforce"
            }
        ],
        "class_parameter": "path"
    },
    "file_ensure_lines_absent": {
        "name": "File ensure lines absent",
        "description": "This is a bundle to ensure that a line is absent in a specific location",
        "class_prefix": "file_ensure_lines_absent",
        "bundle_name": "file_ensure_lines_absent",
        "class_parameter_id": 1,
        "bundle_args": [
            "file",
            "lines"
        ],
        "parameter": [
            {
                "name": "file",
                "description": "File name to edit"
            },
            {
                "name": "lines",
                "description": "Line(s) to remove in the file"
            }
        ],
        "class_parameter": "file"
    },
    "service_check_running": {
        "name": "Service check running",
        "description": "Check if a service is running using the appropriate method",
        "class_prefix": "service_check_running",
        "bundle_name": "service_check_running",
        "class_parameter_id": 1,
        "bundle_args": [
            "service_name"
        ],
        "parameter": [
            {
                "name": "service_name",
                "description": "Process name"
            }
        ],
        "class_parameter": "service_name"
    },
    "package_install": {
        "name": "Package install",
        "description": "Install or update a package in its latest version available",
        "class_prefix": "package_install",
        "bundle_name": "package_install",
        "class_parameter_id": 1,
        "bundle_args": [
            "package_name"
        ],
        "parameter": [
            {
                "name": "package_name",
                "description": "Name of the package to install"
            }
        ],
        "class_parameter": "package_name"
    },
    "file_copy_from_remote_source_recursion": {
        "name": "File copy from remote source recurse",
        "description": "This is a bundle to ensure that a file or directory is copied from a remote source",
        "class_prefix": "file_copy_from_remote_source",
        "bundle_name": "file_copy_from_remote_source_recursion",
        "class_parameter_id": 2,
        "bundle_args": [
            "source",
            "destination",
            "recursion"
        ],
        "parameter": [
            {
                "name": "source",
                "description": "Source file "
            },
            {
                "name": "destination",
                "description": "Destination file"
            },
            {
                "name": "recursion",
                "description": "Recursion depth to enforce for this path (0, 1, 2, ..., inf)"
            }
        ],
        "class_parameter": "destination"
    },
    "service_check_started_at_boot": {
        "name": "Service check at boot",
        "description": "Check if a service is set to start at boot using the appropriate method",
        "class_prefix": "service_check_started_at_boot",
        "bundle_name": "service_check_started_at_boot",
        "class_parameter_id": 1,
        "bundle_args": [
            "service_name"
        ],
        "parameter": [
            {
                "name": "service_name",
                "description": "Service name (as recognized by init.d, upstart, etc...)"
            }
        ],
        "class_parameter": "service_name"
    },
    "file_ensure_lines_present": {
        "name": "File ensure lines present",
        "description": "This is a bundle to ensure that a line is present in a specific location",
        "class_prefix": "file_ensure_lines_present",
        "bundle_name": "file_ensure_lines_present",
        "class_parameter_id": 1,
        "bundle_args": [
            "file",
            "lines"
        ],
        "parameter": [
            {
                "name": "file",
                "description": "File name to edit"
            },
            {
                "name": "lines",
                "description": "Line(s) to add in the file"
            }
        ],
        "class_parameter": "file"
    },
    "service_restart_if": {
        "name": "Service restart at a condition",
        "description": "Restart a service using the appropriate method if the specified class is true, otherwise it is considered as not required and success classes are returned.",
        "class_prefix": "service_restart",
        "bundle_name": "service_restart_if",
        "class_parameter_id": 1,
        "bundle_args": [
            "service_name",
            "trigger_class"
        ],
        "parameter": [
            {
                "name": "service_name",
                "description": "Service"
            },
            {
                "name": "trigger_class",
                "description": "class(es) which will trigger the restart of Service \"(package_service_installed|service_conf_changed)\" by example"
            }
        ],
        "class_parameter": "service_name"
    },
    "file_ensure_block_present": {
        "name": "File ensure block present",
        "description": "This is a bundle to ensure that a text block is present in a specific location",
        "class_prefix": "file_ensure_block_present",
        "bundle_name": "file_ensure_block_present",
        "class_parameter_id": 1,
        "bundle_args": [
            "file",
            "block"
        ],
        "parameter": [
            {
                "name": "file",
                "description": "File name to edit"
            },
            {
                "name": "block",
                "description": "Block(s) to add in the file"
            }
        ],
        "class_parameter": "file"
    },
    "file_template_expand": {
        "name": "File template expand",
        "description": "This is a bundle to expand a template in a specific location",
        "class_prefix": "file_template_expand",
        "bundle_name": "file_template_expand",
        "class_parameter_id": 2,
        "bundle_args": [
            "tml_file",
            "target_file",
            "mode",
            "owner",
            "group"
        ],
        "parameter": [
            {
                "name": "tml_file",
                "description": "File name (with full path within the framework) of the template file"
            },
            {
                "name": "target_file",
                "description": "File name (with full path) where to expand the template"
            },
            {
                "name": "mode",
                "description": "Mode of destination file"
            },
            {
                "name": "owner",
                "description": "Owner of destination file"
            },
            {
                "name": "group",
                "description": "Froup of destination file"
            }
        ],
        "class_parameter": "target_file"
    },
    "file_create_symlink_enforce": {
        "name": "Create symlink (optional overwriting)",
        "description": "This is a bundle to create a symlink at a destination path and pointing to a source target. This is also possible to enforce its creation",
        "class_prefix": "file_create_symlink",
        "bundle_name": "file_create_symlink_enforce",
        "class_parameter_id": 2,
        "bundle_args": [
            "source",
            "destination",
            "enforce"
        ],
        "parameter": [
            {
                "name": "source",
                "description": "Source file "
            },
            {
                "name": "destination",
                "description": "Destination file"
            },
            {
                "name": "enforce",
                "description": "Force symlink if file already exist (true or false)"
            }
        ],
        "class_parameter": "destination"
    },
    "package_install_version": {
        "name": "Package install version",
        "description": "Install or update a package in a specific version",
        "class_prefix": "package_install",
        "bundle_name": "package_install_version",
        "class_parameter_id": 1,
        "bundle_args": [
            "package_name",
            "package_version"
        ],
        "parameter": [
            {
                "name": "package_name",
                "description": "Name of the package to install"
            },
            {
                "name": "package_version",
                "description": "Version of the package to install (can be \"latest\" to install it in its latest version)"
            }
        ],
        "class_parameter": "package_name"
    },
    "file_create_symlink": {
        "name": "Create symlink",
        "description": "This is a bundle to create a symlink at a destination path and pointing to a source target except if a file or directory already exists.",
        "class_prefix": "file_create_symlink",
        "bundle_name": "file_create_symlink",
        "class_parameter_id": 2,
        "bundle_args": [
            "source",
            "destination"
        ],
        "parameter": [
            {
                "name": "source",
                "description": "Source file"
            },
            {
                "name": "destination",
                "description": "Destination file"
            }
        ],
        "class_parameter": "destination"
    },
    "file_ensure_block_in_section": {
        "name": "File ensure block in section",
        "description": "This is a bundle to ensure that a section contain exactly a text block",
        "class_prefix": "file_ensure_block_in_section",
        "bundle_name": "file_ensure_block_in_section",
        "class_parameter_id": 1,
        "bundle_args": [
            "file",
            "section_start",
            "section_end",
            "block"
        ],
        "parameter": [
            {
                "name": "file",
                "description": "File name to edit"
            },
            {
                "name": "section_start",
                "description": "Start of the section"
            },
            {
                "name": "section_end",
                "description": "End of the section"
            },
            {
                "name": "block",
                "description": "Block representing the content of the section"
            }
        ],
        "class_parameter": "file"
    },
    "file_copy_from_remote_source": {
        "name": "File copy from remote source",
        "description": "This is a bundle to ensure that a file or directory is copied from a remote source",
        "class_prefix": "file_copy_from_remote_source",
        "bundle_name": "file_copy_from_remote_source",
        "class_parameter_id": 2,
        "bundle_args": [
            "source",
            "destination"
        ],
        "parameter": [
            {
                "name": "source",
                "description": "Source file "
            },
            {
                "name": "destination",
                "description": "Destination file"
            }
        ],
        "class_parameter": "destination"
    },
    "file_copy_from_local_source": {
        "name": "File copy from local source",
        "description": "This is a bundle to ensure that a file or directory is copied from a local source",
        "class_prefix": "file_copy_from_local_source",
        "bundle_name": "file_copy_from_local_source",
        "class_parameter_id": 2,
        "bundle_args": [
            "source",
            "destination"
        ],
        "parameter": [
            {
                "name": "source",
                "description": "Source file "
            },
            {
                "name": "destination",
                "description": "Destination file"
            }
        ],
        "class_parameter": "destination"
    },
    "permissions_dirs_recurse": {
        "name": "Permissions dirs recurse",
        "description": "Verify if a directory has the right permissions recursively",
        "class_prefix": "permissions",
        "bundle_name": "permissions_dirs_recurse",
        "class_parameter_id": 1,
        "bundle_args": [
            "path",
            "mode",
            "owner",
            "group"
        ],
        "parameter": [
            {
                "name": "path",
                "description": "Path to the directory"
            },
            {
                "name": "mode",
                "description": "Mode to enforce"
            },
            {
                "name": "owner",
                "description": "Owner to enforce"
            },
            {
                "name": "group",
                "description": "Group to enforce"
            }
        ],
        "class_parameter": "path"
    },
    "package_verify_version": {
        "name": "Package verify version",
        "description": "Verify if a package is installed in a specific version",
        "class_prefix": "package_install",
        "bundle_name": "package_verify_version",
        "class_parameter_id": 1,
        "bundle_args": [
            "package_name",
            "package_version"
        ],
        "parameter": [
            {
                "name": "package_name",
                "description": "Name of the package to verify"
            },
            {
                "name": "package_version",
                "description": "Version of the package to verify (can be \"latest\" for latest version)"
            }
        ],
        "class_parameter": "package_name"
    },
    "package_remove": {
        "name": "Package remove",
        "description": "Remove a package",
        "class_prefix": "package_remove",
        "bundle_name": "package_remove",
        "class_parameter_id": 1,
        "bundle_args": [
            "package_name"
        ],
        "parameter": [
            {
                "name": "package_name",
                "description": "Name of the package to remove"
            }
        ],
        "class_parameter": "package_name"
    },
    "service_ensure_started_at_boot": {
        "name": "Service ensure at boot",
        "description": "Force a service to be started at boot",
        "class_prefix": "service_ensure_started_at_boot",
        "bundle_name": "service_ensure_started_at_boot",
        "class_parameter_id": 1,
        "bundle_args": [
            "service_name"
        ],
        "parameter": [
            {
                "name": "service_name",
                "description": "Service name (as recognized by init.d, upstart, etc...)"
            }
        ],
        "class_parameter": "service_name"
    },
    "permissions": {
        "name": "Permissions (non recursive)",
        "description": "Verify if a file or directory has the right permissions non recursively",
        "class_prefix": "permissions",
        "bundle_name": "permissions",
        "class_parameter_id": 1,
        "bundle_args": [
            "path",
            "mode",
            "owner",
            "group"
        ],
        "parameter": [
            {
                "name": "path",
                "description": "Path to the file / directory"
            },
            {
                "name": "mode",
                "description": "Mode to enforce"
            },
            {
                "name": "owner",
                "description": "Owner to enforce"
            },
            {
                "name": "group",
                "description": "Group to enforce"
            }
        ],
        "class_parameter": "path"
    },
    "service_start": {
        "name": "Service start",
        "description": "Start a service using the appropriate method",
        "class_prefix": "service_start",
        "bundle_name": "service_start",
        "class_parameter_id": 1,
        "bundle_args": [
            "service_name"
        ],
        "parameter": [
            {
                "name": "service_name",
                "description": "Service"
            }
        ],
        "class_parameter": "service_name"
    },
    "service_ensure_running": {
        "name": "Service ensure running",
        "description": "Ensure that a service is running using the appropriate method",
        "class_prefix": "service_ensure_running",
        "bundle_name": "service_ensure_running",
        "class_parameter_id": 1,
        "bundle_args": [
            "service_name"
        ],
        "parameter": [
            {
                "name": "service_name",
                "description": "Service name (as recognized by init.d, upstart, etc...)"
            }
        ],
        "class_parameter": "service_name"
    },
    "file_create_symlink_force": {
        "name": "Create symlink (force overwrite)",
        "description": "This is a bundle to create a symlink at a destination path and pointing to a source target even if a file or directory already exists.",
        "class_prefix": "file_create_symlink",
        "bundle_name": "file_create_symlink_force",
        "class_parameter_id": 2,
        "bundle_args": [
            "source",
            "destination"
        ],
        "parameter": [
            {
                "name": "source",
                "description": "Source file"
            },
            {
                "name": "destination",
                "description": "Destination file"
            }
        ],
        "class_parameter": "destination"
    },
    "service_ensure_running_path": {
        "name": "Service ensure running with service path",
        "description": "Ensure that a service is running using the appropriate method, specifying the path of the service in the ps output",
        "class_prefix": "service_ensure_running",
        "bundle_name": "service_ensure_running_path",
        "class_parameter_id": 1,
        "bundle_args": [
            "service_name",
            "service_path"
        ],
        "parameter": [
            {
                "name": "service_name",
                "description": "Service name (as recognized by init.d, upstart, etc...)"
            },
            {
                "name": "service_path",
                "description": "Service with its path, as in the output from 'ps'"
            }
        ],
        "class_parameter": "service_name"
    },
    "package_install_version_cmp": {
        "name": "Package install version compare",
        "description": "Install a package or verify if it is installed in a specific version, or higher or lower version than a version specified",
        "class_prefix": "package_install",
        "bundle_name": "package_install_version_cmp",
        "class_parameter_id": 1,
        "bundle_args": [
            "package_name",
            "version_comparator",
            "package_version",
            "action"
        ],
        "parameter": [
            {
                "name": "package_name",
                "description": "Name of the package to install or verify"
            },
            {
                "name": "version_comparator",
                "description": "Comparator between installed version and defined version, can be ==,<=,>=,<,>,!="
            },
            {
                "name": "package_version",
                "description": "The version of the package to verify (can be \"latest\" for latest version)"
            },
            {
                "name": "action",
                "description": "Action to perform, can be add, verify (defaults to verify)"
            }
        ],
        "class_parameter": "package_name"
    }
};

var techs = {
    "ntp {": {
        "method_calls": [
            {
                "method_name": "package_install",
                "class_context": "any",
                "args": [
                    "ntp"
                ]
            },
            {
                "method_name": "file_from_template",
                "class_context": "any",
                "args": [
                    "${path_technique}/templates/ntp.conf",
                    "/etc/ntp.conf"
                ]
            },
            {
                "method_name": "service_restart",
                "class_context": "any",
                "args": [
                    "ntp"
                ]
            },
            {
                "method_name": "service_ensure_running",
                "class_context": "any",
                "args": [
                    "ntp"
                ]
            }
        ],
        "name": "NTP",
        "description": "Install, configure and ensure ntpd is running. Uses a template file for configuration.",
        "version": "0.1",
        "bundle_name": "ntp {",
        "bundle_args": []
    },
    "openssh_server": {
        "method_calls": [
            {
                "method_name": "package_install",
                "class_context": "any",
                "args": [
                    "${openssh_knowledge.ssh_package_name}"
                ]
            },
            {
                "method_name": "file_template_expand",
                "class_context": "any",
                "args": [
                    "${openssh_knowledge.ssh_template_file}",
                    "${openssh_knowledge.ssh_config_file_location}",
                    "600",
                    "root",
                    "root"
                ]
            },
            {
                "method_name": "service_reload",
                "class_context": "any",
                "args": [
                    "${openssh_knowledge.ssh_etc_initd}"
                ]
            },
            {
                "method_name": "service_start",
                "class_context": "any",
                "args": [
                    "${openssh_knowledge.ssh_etc_initd}"
                ]
            }
        ],
        "name": "OpenSSH server",
        "description": "Install, configure and ensure the OpenSSH server is running.",
        "version": "0.1",
        "bundle_name": "openssh_server",
        "bundle_args": []
    },
    "bla": {
        "method_calls": [
            {
                "method_name": "package_install_version",
                "class_context": "any",
                "args": [
                    "${bla.apache_package_name}",
                    "2.2.11"
                ]
            },
            {
                "method_name": "service_start",
                "class_context": "cfengine",
                "args": [
                    "${bla.apache_package_name}"
                ]
            },
            {
                "method_name": "package_install",
                "class_context": "cfengine",
                "args": [
                    "nano"
                ]
            }
        ],
        "name": "Bla Technique for evaluation of parsingness",
        "description": "This meta-Technique is a sample only, allowing for testing.",
        "version": "0.1",
        "bundle_name": "bla",
        "bundle_args": []
    },
    "motd {": {
        "method_calls": [
            {
                "method_name": "file_ensure_lines_present",
                "class_context": "any",
                "args": [
                    "/etc/motd",
                    "${motd_content}"
                ]
            }
        ],
        "name": "Message Of The Day (MOTD)",
        "description": "Edit the MOTD file and add a line to it",
        "version": "0.1",
        "bundle_name": "motd {",
        "bundle_args": []
    }
};

angular.module('ncf', ['ui.bootstrap','ui.bootstrap.tpls'])
.controller('generic', function ($scope) { 
  $scope.searchTerm="";
    
  $scope.capitaliseFirstLetter = function (string) {
    if (string.length === 0) {
        return string;
    } else {
    return string.charAt(0).toUpperCase() + string.slice(1);
    }
}
  $scope.toTechUI = function (technique) {
    var args = technique.method_calls.map( function (method_call, i2) {
      method_call.args = method_call.args.map( function (v, i) {
        return {"value" : v};
      });
      return method_call;
    });
    technique.method_calls = args;
    return technique;
  }
  
  
  $scope.getTechniques = function () {
    var techniques = []
    for (var techKey in techs) {
      var technique = $scope.toTechUI(techs[techKey]);
      techniques.push(technique);
    }
    return techniques;
  }

  $scope.orderGenericMethods = function () {
    var groupedMethods = {};
    for (var methodKey in methods) {
      var method = methods[methodKey];
      var name = methodKey.split('_')[0];
      var grouped = groupedMethods[name];
      if (grouped === undefined) {
          groupedMethods[name] = [method];
      } else {
        groupedMethods[name].push(method);
      }
    };
    return groupedMethods;      
  }
$scope.generic_methods = methods;
$scope.myMethods = $scope.orderGenericMethods();
$scope.techniques = $scope.getTechniques();
$scope.selected=undefined;
$scope.original=undefined;

  $scope.selectTechnique = function(technique) {
    $scope.selected=angular.copy(technique);
    $scope.original=angular.copy($scope.selected);
  };
  $scope.addBundle = function(bundle) {
    
    var call = { "method_name" : bundle.bundle_name
      , "class_context" : "any"
      , "args": bundle.bundle_args.map(function(v,i) {
        return {"value" :  "" };
      })
    }

    $scope.selected.method_calls.push(call);
  };
    
  $scope.isUnchanged = function(technique) {
    return angular.equals(technique, $scope.original);
  };

    
  $scope.resetTechnique = function() {
    $scope.selected=angular.copy($scope.original);
  };

  $scope.newTechnique = function() {
    var newTech = {
        "method_calls" : [],
        "name": "",
        "description": "",
        "version": "1.0",
        "bundle_name": undefined,
        "bundle_args": []
    };
    $scope.selectTechnique(newTech);
  };
    
  $scope.$watch('selected', function() { $scope.original == angular.copy($scope.selected) }, true);

  $scope.getBundleName = function(method_call) {
      return $scope.generic_methods[method_call.method_name].name;
  };
  $scope.getBundleDescription = function(method_call) {
      return $scope.generic_methods[method_call.method_name].description;
  };
  $scope.getArgName = function(index,method_call) {
      return $scope.generic_methods[method_call.method_name].parameter[index].name;
  };

  $scope.removeMethod= function(index) {
      $scope.selected.method_calls.splice(index, 1);
  }
  $scope.saveTechnique = function() {
    if ($scope.selected.bundle_name === undefined) {
        var bundle_name = $scope.selected.name.replace(/ /g,"_");
        $scope.selected.bundle_name = bundle_name;
    }
  $scope.techniques[$scope.selected.bundle_name]=angular.copy($scope.selected);
  };

});
