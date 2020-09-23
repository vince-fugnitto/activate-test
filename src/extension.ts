
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	vscode.window.showInformationMessage('Activate-Test Extension Activated!\nEditorConfig Present.');
}

export function deactivate() { }
