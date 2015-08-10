package com.magus.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.ezmorph.bean.MorphDynaBean;
import net.sf.json.JSON;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

/**
 * 对应Chp23
 * @author 	lian
 * @date 	2014-4-2
 */
public class EditGridServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public EditGridServlet() {
        super();
    }

    public void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	// 首先设置页面信息
    	response.setContentType("text/html;charset=utf-8");
    	PrintWriter out = response.getWriter();
    	
    	// 获取参数
    	String data = request.getParameter("data");			// 数据
    	String action = request.getParameter("action");		// 操作类型
    	
    	JSONObject a = null;
    	Object bean = null;
    	JSONArray jsonAray = JSONArray.fromObject(data);
    	Object[] objArray = jsonAray.toArray();
    	for(Object obj : objArray) {
    		a = JSONObject.fromObject(obj);
    		bean = JSONObject.toBean(a);
    		MorphDynaBean morphDyanBean = (MorphDynaBean) bean;
    		
    		// 经过查看, 发现bean为MorphDyanBean类型
    		Integer id = (Integer) morphDyanBean.get("ID");
    		String name = (String) morphDyanBean.get("NAME");
    		String address = (String) morphDyanBean.get("ADDRESS");
    		String bank = (String) morphDyanBean.get("BANK");
    		Boolean isFast = (Boolean) morphDyanBean.get("ISFAST");
    		String date = (String) morphDyanBean.get("DATE");
    		
    		System.out.println(id+"\t"+name+"\t"+address+"\t"+bank+"\t"+isFast+"\t"+date);
    	}
    	
    	if("delete".equals(action)) {
    		out.println("{msg:'恭喜, 删除的行已同步数据库!'}");
    	} else {
    		out.println("{msg:'恭喜, 数据修改!'}");
    	}
    	
    	out.flush();
    	out.close();
    }
    
    public void print(HttpServletRequest request, String para) {
    	System.out.println(para+"--"+request.getParameter(para));
    }

}
