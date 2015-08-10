package com.magus.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Chp16
 * @author 	lian
 * @date 	2014-4-25
 * @time	上午9:50:03
 */
public class FormPanelServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public FormPanelServlet() {
        super();
    }

    public void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	response.setContentType("text/html;charset=utf-8");
    	PrintWriter out = response.getWriter();
    	
    	print(request, "txtName");
    	print(request, "rdaSex");
    	String[] hobbys = request.getParameterValues("chkHobby");
    	if(hobbys!=null) {
    		for(String hobby : hobbys) {
    			System.out.print("hobby:"+hobby+",\t");
    		}
    	}
    	print(request, "chkEdu");
    	print(request, "timeWork");
    	
    	out.println("{success: true, msg: '提交成功!'}");
    	out.flush();
    	out.close();
    }
    
    public void print(HttpServletRequest request, String para) {
    	System.out.println(para+"--"+request.getParameter(para));
    }

}
